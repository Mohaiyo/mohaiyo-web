const trim = (str) => {
  return (str || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '')
}
// HTML5为每个元素定义了classLlist属性，用于在元素中添加，移除及切换 CSS 类。该属性是 DOMTokenList 对象（一个只读的类数组对象），你可以通过DOMTokenList定义的方法对其进行修改。
export const hasClass = (el, cls) => {
  if (!el || !cls) return false
  if (cls.includes(' ')) throw new Error('classNname should not contain space.')
  if (el.classList) {
    return el.classList.contains(cls)
  } else {
    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1
  }
}

export const addClass = (el, cls) => {
  if (!el) { return }
  let curClass = el.className
  let classes = (cls || '').split(' ') // 切割成数组

  for (let i = 0, j = classes.length; i < j; i++) {
    let clsName = classes[i]
    if (!clsName) continue

    if (el.classList) {
      el.classList.add(clsName)
    } else {
      if (!hasClass(el, clsName)) {
        curClass += ' ' + clsName
      }
    }
  }
  if (!el.classList) {
    el.className = curClass
  }
}

export const removeClass = (el, cls) => {
  if (!el || !cls) return
  let classes = cls.split(' ')
  let curClass = ' ' + el.className + ' '

  for (let i = 0, j = classes.length; i < j; i++) {
    let clsName = classes[i]
    if (!clsName) continue

    if (el.classList) {
      el.classList.remove(clsName)
    } else {
      if (hasClass(el, clsName)) {
        curClass = curClass.replace(' ' + clsName + ' ', ' ')
      }
    }
  }
  if (!el.classList) {
    el.className = trim(curClass)
  }
}
