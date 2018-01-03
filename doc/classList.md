# classList属性 (支持classList的浏览器有Firefox3.6+和chrome和IE10+。 )

HTML5为每个元素定义了classLlist属性，用于在元素中添加，移除及切换 CSS 类。该属性是 DOMTokenList 对象（一个只读的类数组对象），你可以通过DOMTokenList定义的方法对其进行修改。

- 属性：

length：返回类列表中类的数量（只读）

用法：el.classList.length

- 方法：

```
.a { color:red }
.b { color:green }
.c { color: yellow }

<div class="e"></div>

var el = document.getElementById(div);
```
  - add( class1, class2, ...)
  > 在元素中添加一个或多个类名（如果指定的类名已存在，则不会添加） 用法：`el.classList.add("a", "b", "c");`
  - remove( class1, class2, ...)
  > 删除元素中一个或多个类名  用法：el.classList.remove('a','b');
  - toggle(class, true|false)
  > 在元素中切换类名 参数1：要移出或者添加的类名 参数2：可选参数，不论类名是否存在，为true时强制添加类名，false时强制删除类名
  > 用法： 添加：el.classList.toggle("d", true);，删除：el.classList.toggle("d", false);
  - contains( class )
  > 判断指定的类名是否存在 用法：el.classList.contains("e")  ，// 返回true
  - item(index)
  > 根据索引返回类名，索引从 0 开始，如果没有则返回null  用法：el.classList.item(0)  //返回e
