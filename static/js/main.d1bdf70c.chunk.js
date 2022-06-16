(this["webpackJsonpreact-starter-pack"]=this["webpackJsonpreact-starter-pack"]||[]).push([[0],{41:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},55:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n(0),r=n.n(a),c=n(19),s=n(18),l=n.n(s),j=(n(41),n(3)),o=n(11),d=n(22),u=Object(d.b)({name:"cart",initialState:{itemsInCart:[]},reducers:{setItemInCart:function(e,t){e.itemsInCart.push(t.payload)},deleteItemFromCart:function(e,t){e.itemsInCart=e.itemsInCart.filter((function(e){return e.idDrink!==t.payload}))}}}),b=u.actions,h=b.setItemInCart,m=b.deleteItemFromCart,O=u.reducer,x=Object(d.a)({reducer:{cart:O}}),f=n(28),p=n(29),v=n(35),N=n(33),k=function(e){var t=e.drink,n=Object(o.b)();return Object(i.jsx)("div",{className:"drinkCard__button",children:Object(i.jsx)("button",{className:"drinkCard__button--link button",type:"button",onClick:function(e){e.stopPropagation(),n(h(t))},children:"Ohh Yes! I want it!"})})},g=(n(47),function(e){Object(v.a)(n,e);var t=Object(N.a)(n);function n(e){var i;return Object(f.a)(this,n),(i=t.call(this,e)).state={error:null,isLoaded:!1,drinks:[]},i}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,drinks:t.drinks})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.error,a=t.isLoaded,r=t.drinks;return n?Object(i.jsx)("p",{children:" Error "}):a?Object(i.jsx)("div",{className:"wrapper",children:r.map((function(t){return Object(i.jsxs)("div",{className:"drinkCard",children:[Object(i.jsx)("div",{drinkCard__pic:!0,children:Object(i.jsx)("img",{src:t.strDrinkThumb,alt:"pic",className:"drinkCard__img"})}),Object(i.jsx)("div",{className:"drinkCard__name",children:t.strDrink}),Object(i.jsx)(k,{drink:t,onClick:e.addToOrder})]})}))}):Object(i.jsx)("p",{children:" Loading... "})}}]),n}(a.Component)),C=(n(48),n(8)),_=(n(49),function(e){var t=e.items,n=e.onClick;return Object(i.jsxs)("div",{className:"wishList",children:[Object(i.jsx)("div",{className:"wishList__content",children:t.length>0?Object(i.jsxs)("div",{children:["i already choose",t.length,"coctails"]}):"NO WISHES"}),t.length>0&&Object(i.jsx)("div",{className:"wishList__button",role:"button","aria-hidden":"true",onClick:n,children:"what did i choose ???"})]})}),y=(n(50),function(){var e=Object(o.c)((function(e){return e.cart.itemsInCart})),t=Object(a.useState)(!1),n=Object(C.a)(t,2),r=n[0],c=n[1],s=Object(j.f)(),l=Object(a.useCallback)((function(){c(!1),s("wish")}),[s]);return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("button",{className:"navigation__link button",type:"button",onClick:function(){return c(!r)},children:"Wish"}),r&&Object(i.jsx)(_,{items:e,onClick:l})]})}),w=function(){return Object(i.jsxs)("nav",{className:"navigation",children:[Object(i.jsx)("a",{className:"navigation__link",href:"/",children:"Home"}),Object(i.jsx)("a",{className:"navigation__link",href:"contact",children:"Contact"}),Object(i.jsx)("a",{className:"navigation__link",href:"login",children:"LogIn"}),Object(i.jsx)(y,{})]})},I=(n(51),function(){return Object(i.jsxs)("header",{className:"header",children:[Object(i.jsx)("h1",{className:"header__title",children:"Drinking Paradice"}),Object(i.jsx)(w,{})]})}),S=(n(52),function(e){var t=e.drink,n=t.strDrink,a=t.strDrinkThumb,r=Object(o.b)();return Object(i.jsx)("div",{className:"wish-item",children:Object(i.jsxs)("div",{className:"wish-item__wrapper",children:[Object(i.jsx)("div",{className:"wish-item__box",style:{backgroundImage:"url(".concat(a,")")}}),Object(i.jsx)("span",{children:n}),Object(i.jsx)("div",{className:"wish-item__button",children:Object(i.jsx)("button",{className:"wish-item__button--link button",type:"button",onClick:function(){r(m(t.idDrink))},children:"I change my mind"})})]})})}),F=(n(53),function(){var e=Object(o.c)((function(e){return e.cart.itemsInCart}));return e.length<1?Object(i.jsx)("h1",{children:"You need to choose something, please"}):Object(i.jsx)("div",{className:"wish-page",children:e.map((function(e){return Object(i.jsx)(S,{drink:e})}))})}),L=n(32),q=function(e){var t={};return e.firstName?e.firstName.length>15&&(t.firstName="Must be 15 characters or less"):t.firstName="Required",e.lastName?e.lastName.length>20&&(t.lastName="Must be 20 characters or less"):t.lastName="Required",e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",t},A=function(){var e=Object(L.a)({initialValues:{firstName:"",lastName:"",email:""},validate:q,onSubmit:function(e){alert(JSON.stringify(e,null,2))}});return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{children:" FORMIK LIBRARY"}),Object(i.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(i.jsx)("label",{htmlFor:"firstName",children:"First Name"}),Object(i.jsx)("input",{id:"firstName",name:"firstName",type:"text",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.firstName}),e.touched.firstName&&e.errors.firstName?Object(i.jsx)("div",{children:e.errors.firstName}):null,Object(i.jsx)("label",{htmlFor:"lastName",children:"Last Name"}),Object(i.jsx)("input",{id:"lastName",name:"lastName",type:"text",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.lastName}),e.touched.lastName&&e.errors.lastName?Object(i.jsx)("div",{children:e.errors.lastName}):null,Object(i.jsx)("label",{htmlFor:"email",children:"Email Address"}),Object(i.jsx)("input",{id:"email",name:"email",type:"email",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.email}),e.touched.email&&e.errors.email?Object(i.jsx)("div",{children:e.errors.email}):null,Object(i.jsx)("button",{type:"submit",children:"Submit"})]})]})},B=n(2),D=n(34);n(55);var R=function(){var e,t=Object(D.a)(),n=t.register,a=t.formState.errors,r=t.handleSubmit;return Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"REACT HOOK FORM"}),Object(i.jsxs)("form",{className:"contact-me",onSubmit:r((function(e){alert(JSON.stringify(e))})),children:[Object(i.jsxs)("label",{children:["First Name:",Object(i.jsx)("input",Object(B.a)({},n("firstName",{required:!1})))]}),Object(i.jsxs)("label",{children:["Second Name:",Object(i.jsx)("input",Object(B.a)({},n("secondName",{required:!1})))]}),Object(i.jsxs)("label",{children:["Email:",Object(i.jsx)("input",Object(B.a)({type:"email"},n("email",{required:!1})))]}),Object(i.jsxs)("label",{children:["Your messsage?",Object(i.jsx)("textarea",Object(B.a)({type:"text-aria"},n("text-area",{required:!1})))]}),Object(i.jsxs)("label",{children:["Are you agree with our private policy:",Object(i.jsx)("input",Object(B.a)({type:"checkbox"},n("checkbox",{required:"checkbox required"})))]}),Object(i.jsx)("div",{children:(null===a||void 0===a?void 0:a.checkbox)&&Object(i.jsx)("p",{children:(null===a||void 0===a||null===(e=a.checkbox)||void 0===e?void 0:e.message)||"Error"})}),Object(i.jsx)("input",{type:"submit"})]})]})};n(57);function E(){return Object(i.jsx)(o.a,{store:x,children:Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(I,{}),Object(i.jsxs)(j.c,{children:[Object(i.jsx)(j.a,{path:"/",element:Object(i.jsx)(g,{})}),Object(i.jsx)(j.a,{path:"contact",element:Object(i.jsx)(R,{})}),Object(i.jsx)(j.a,{path:"wish",element:Object(i.jsx)(F,{})}),Object(i.jsx)(j.a,{path:"login",element:Object(i.jsx)(A,{})})]})]})})}l.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(c.a,{children:Object(i.jsx)(E,{})})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.d1bdf70c.chunk.js.map