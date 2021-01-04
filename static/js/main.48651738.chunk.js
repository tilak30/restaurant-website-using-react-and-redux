(this.webpackJsonpconfusion=this.webpackJsonpconfusion||[]).push([[0],{100:function(e,t,a){},157:function(e,t,a){},158:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(13),o=a.n(l),s=(a(97),a(98),a(99),a(100),a(15)),c=a(16),m=a(18),i=a(17),u=a(2),d=function(){return r.a.createElement("div",{className:"col-12"},r.a.createElement("span",{className:"fa fa-spinner fa-pulse fa-3x fa-fw text-primary"}),r.a.createElement("p",null,"Loading . . ."))},E="https://my-json-server.typicode.com/tilak30/restaurant-website-using-react-and-redux/",f=a(22),h={height:"20rem",minHeight:"20rem",maxHeight:"20rem"},p={height:"15rem",minHeight:"15rem",maxHeight:"15rem"};function g(e){var t=e.item,a=e.isLoading,n=e.errMess;return a?r.a.createElement(d,null):n?r.a.createElement("h4",null,n):r.a.createElement(f.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(u.d,null,r.a.createElement(u.g,{style:h,src:E+t.image,alt:t.name}),r.a.createElement(u.e,{style:p},r.a.createElement(u.k,null,t.name),t.designation?r.a.createElement(u.i,null,t.designation):null,r.a.createElement(u.j,null,t.description))))}var b=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row align-items-start"},r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(g,{item:e.dish,isLoading:e.dishesLoading,errMess:e.dishesErrMess})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(g,{item:e.promotion,isLoading:e.promoLoading,errMess:e.promoErrMess})),r.a.createElement("div",{className:"col-12 col-md m-1"},r.a.createElement(g,{item:e.leader,isLoading:e.leaderLoading,errMess:e.leaderErrMess}))))},v=a(5),N={height:"20rem",minHeight:"20rem",maxHeight:"20rem",borderRadius:0};function y(e){var t=e.dish;e.onClick;return r.a.createElement(u.d,{key:t.id},r.a.createElement(v.b,{to:"/menu/".concat(t.id)},r.a.createElement(u.g,{style:N,width:"100%",src:E+t.image,alt:t.name}),r.a.createElement(u.h,null,r.a.createElement(u.k,null,t.name))))}var w=function(e){var t=e.dishes.dishes.map((function(e){return r.a.createElement("div",{key:e.id,className:"col-12 col-md-5 m-1"},r.a.createElement(y,{dish:e}))}));return e.dishes.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(d,null))):e.dishes.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h4",null,e.dishes.errMess)))):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(u.a,null,r.a.createElement(u.b,null,r.a.createElement(v.b,{to:"/home"},"Home")),r.a.createElement(u.b,{active:!0},"Menu")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Menu"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},t))},O=a(21),M=a(8),k=function(e){return e&&e.length},L=function(e){return function(t){return!t||t.length<=e}},j=function(e){return function(t){return t&&t.length>=e}},S=function(e){return!isNaN(Number(e))},x=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},C=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleSubmit=n.handleSubmit.bind(Object(O.a)(n)),n}return Object(c.a)(a,[{key:"handleSubmit",value:function(e){this.props.postFeedback(e),this.props.resetFeedbackForm()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(u.a,null,r.a.createElement(u.b,null,r.a.createElement(v.b,{to:"/home"},"Home")),r.a.createElement(u.b,null,"Contact us")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Contact us"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Location Information")),r.a.createElement("div",{className:"col-12 col-sm-4 offset-sm-1"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope"}),": ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-6 offset-sm-1"},r.a.createElement("h5",null,"Map of our Location")),r.a.createElement("div",{className:"col-12 col-sm-11 offset-sm-1"},r.a.createElement("div",{className:"btn-group",role:"group"},r.a.createElement("a",{role:"button",className:"btn btn-primary",href:"tel:+85212345678"},r.a.createElement("i",{className:"fa fa-phone"})," Call"),r.a.createElement("a",{role:"button",className:"btn btn-info",href:"123"},r.a.createElement("i",{className:"fa fa-skype"})," Skype"),r.a.createElement("a",{role:"button",className:"btn btn-success",href:"mailto:confusion@food.net"},r.a.createElement("i",{className:"fa fa-envelope-o"})," Email")))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"Send us you feedback")),r.a.createElement("div",{className:"col-12 col-md-9"},r.a.createElement(M.Form,{model:"feedback",onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement(u.A,{className:"form-group"},r.a.createElement(u.q,{htmlFor:"firstname",md:2},"First name"),r.a.createElement(u.l,{md:10},r.a.createElement(M.Control.text,{model:".firstname",id:"firstname",name:"firstname",placeholder:"First name",className:"form-control",validators:{required:k,minLength:j(3),maxLength:L(15)}}),r.a.createElement(M.Errors,{className:"text-danger",model:".firstname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 charaters or less"}}))),r.a.createElement(u.A,{className:"form-group"},r.a.createElement(u.q,{htmlFor:"lastname",md:2},"Last name"),r.a.createElement(u.l,{md:10},r.a.createElement(M.Control.text,{model:".lastname",id:"lastname",name:"lastname",placeholder:"Last name",className:"form-control",validators:{required:k,minLength:j(3),maxLength:L(15)}}),r.a.createElement(M.Errors,{className:"text-danger",model:".lastname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 charaters or less"}}))),r.a.createElement(u.A,{className:"form-group"},r.a.createElement(u.q,{htmlFor:"telnum",md:2},"Contact tel."),r.a.createElement(u.l,{md:10},r.a.createElement(M.Control.text,{model:".telnum",id:"telnum",name:"telnum",placeholder:"Tel. number",className:"form-control",validators:{required:k,minLength:j(3),maxLength:L(15),isNumber:S}}),r.a.createElement(M.Errors,{className:"text-danger",model:".telnum",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 charaters or less",isNumber:"Must be a number"}}))),r.a.createElement(u.A,{className:"form-group"},r.a.createElement(u.q,{htmlFor:"email",md:2},"Email"),r.a.createElement(u.l,{md:10},r.a.createElement(M.Control.text,{model:".email",id:"email",name:"email",placeholder:"Email",className:"form-control",validators:{required:k,validEmail:x}}),r.a.createElement(M.Errors,{className:"text-danger",model:".email",show:"touched",messages:{required:"Required",validEmail:"Invalid email address"}}))),r.a.createElement(u.A,{className:"form-group"},r.a.createElement(u.l,{md:{size:6,offset:2}},r.a.createElement("div",{className:"form-check"},r.a.createElement(u.q,null,r.a.createElement(M.Control.checkbox,{model:".agree",name:"agree",className:"form-check-input"})," "," ",r.a.createElement("strong",null,"May we contact you?")))),r.a.createElement(u.l,{md:{size:3,offset:1}},r.a.createElement(M.Control.select,{model:".contactType",name:"contactType",className:"form-control"},r.a.createElement("option",null,"Tel."),r.a.createElement("option",null,"Email")))),r.a.createElement(u.A,{className:"form-group"},r.a.createElement(u.q,{htmlFor:"feedback",md:2},"Your feedback"),r.a.createElement(u.l,{md:10},r.a.createElement(M.Control.textarea,{model:".message",id:"message",name:"message",rows:"12",className:"form-control"}))),r.a.createElement(u.A,{className:"form-group"},r.a.createElement(u.l,{md:{size:10,offset:2}},r.a.createElement(u.c,{type:"submit",color:"primary"},"Send feedback")))))))}}]),a}(n.Component),A=function(e){return e&&e.length},D=function(e){return function(t){return!t||t.length<=e}},F=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={isNavOpen:!1,isModalOpen:!1},n.toggleModal=n.toggleModal.bind(Object(O.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(O.a)(n)),n}return Object(c.a)(a,[{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleSubmit",value:function(e){this.toggleModal(),this.props.postComment(this.props.dishId,e.rating,e.author,e.comment)}},{key:"render",value:function(){var e,t=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.v,{className:"ml-auto",navbar:!0},r.a.createElement(u.w,null,r.a.createElement(u.c,{outline:!0,onClick:this.toggleModal},r.a.createElement("span",{className:"fa fa-pencil fa-lg"})," Submit Comment"))),r.a.createElement(u.s,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(u.u,{toggle:this.toggleModal},"Submit Comment"),r.a.createElement(u.t,null,r.a.createElement(M.LocalForm,{onSubmit:function(e){return t.handleSubmit(e)}},r.a.createElement(u.A,null,r.a.createElement(u.q,{htmlFor:"firstname",md:6},"Rating")," "),r.a.createElement(u.A,{className:"form-group"},r.a.createElement(u.l,{md:10},r.a.createElement(M.Control.select,{model:".firstname",id:"firstname",name:"firstname",className:"form-control"},r.a.createElement("option",{value:"1"},"1"),r.a.createElement("option",{value:"2"},"2"),r.a.createElement("option",{value:"3"},"3"),r.a.createElement("option",{value:"4"},"4"),r.a.createElement("option",{value:"5"},"5")))),r.a.createElement(u.A,null,r.a.createElement(u.q,{htmlFor:"yourname",md:6},"Your Name")),r.a.createElement(u.A,{className:"form-group"},r.a.createElement(u.l,{md:10},r.a.createElement(M.Control.text,{model:".yourname",id:"yourname",name:"yourname",placeholder:"Your Name",className:"form-control",validators:{required:A,minLength:(e=3,function(t){return t&&t.length>=e}),maxLength:D(15)}}),r.a.createElement(M.Errors,{className:"text-danger",model:".yourname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(u.A,null,r.a.createElement(u.q,{htmlFor:"email",md:6},"Comment")),r.a.createElement(u.A,{className:"form-group"},r.a.createElement(u.l,{md:10},r.a.createElement(M.Control.textarea,{model:".email",id:"email",name:"email",rows:"12",className:"form-control"}))),r.a.createElement(u.A,{className:"form-group"},r.a.createElement(u.l,{md:{size:10,offset:0}},r.a.createElement(u.c,{type:"submit",color:"primary"},"Submit")))))))}}]),a}(n.Component);function I(e){var t=e.dish;return r.a.createElement("div",{className:"col-12 col-md-5 m-1"},r.a.createElement(f.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"}},r.a.createElement(u.d,null,r.a.createElement(u.g,{top:!0,src:E+t.image,alt:t.name}),r.a.createElement(u.e,null,r.a.createElement(u.k,null,t.name),r.a.createElement(u.j,null,t.description)))))}function T(e){var t=e.comments,a=e.postComment,n=e.dishId,l=t.map((function(e){return r.a.createElement(f.Fade,{in:!0},r.a.createElement("li",{key:e.id},r.a.createElement("p",null,e.comment),r.a.createElement("p",null,"-- ",e.author,", \xa0",new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"2-digit"}).format(new Date(e.date)))))}));return null!=t?r.a.createElement("div",{className:"col-12 col-md-5 m-1"},r.a.createElement("h4",null," Comments "),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement(f.Stagger,{in:!0},l)),r.a.createElement(F,{dishId:n,postComment:a})):r.a.createElement("div",null)}var R=function(e){return e.isLoading?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(d,null))):e.errMess?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h4",null,e.errMess))):null!=e.dish?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(u.a,null,r.a.createElement(u.b,null,r.a.createElement(v.b,{to:"/menu"},"Menu")),r.a.createElement(u.b,{active:!0},e.dish.name)),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,e.dish.name),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row"},r.a.createElement(I,{dish:e.dish}),r.a.createElement(T,{comments:e.comments,postComment:e.postComment,dishId:e.dish.id}))):r.a.createElement("div",null)},q=a(89),H=a.n(q),_={backgroundSize:"100%",backgroundImage:"url(assets/images/test.png)",height:"25rem",color:"azure",paddingTop:"1rem"},P=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).toggleModal=function(){n.setState({isModalOpen:!n.state.isModalOpen})},n.handleLogin=function(e){n.toggleModal(),alert("Username: "+n.username.value+" Password: "+n.password.value+" Remember: "+n.remember.checked),e.preventDefault()},n.toggleNav=n.toggleNav.bind(Object(O.a)(n)),n.state={isNavOpen:!1,isModalOpen:!1},n}return Object(c.a)(a,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(u.x,{dark:!0,expand:"md"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement(u.z,{onClick:this.toggleNav}),r.a.createElement(u.y,{className:"mr-auto",href:"/"},r.a.createElement("img",{src:H.a,height:"30",width:"41",alt:"Ristorante Con Fusion"})),r.a.createElement(u.m,{isOpen:this.state.isNavOpen,navbar:!0},r.a.createElement(u.v,{navbar:!0},r.a.createElement(u.w,null,r.a.createElement(v.c,{className:"nav-link",to:"/home"},r.a.createElement("span",{className:"fa fa-home fa-lg"})," Home")),r.a.createElement(u.w,null,r.a.createElement(v.c,{className:"nav-link",to:"/aboutus"},r.a.createElement("span",{className:"fa fa-info fa-lg"})," About Us")),r.a.createElement(u.w,null,r.a.createElement(v.c,{className:"nav-link",to:"/menu"},r.a.createElement("span",{className:"fa fa-list fa-lg"})," Menu")),r.a.createElement(u.w,null,r.a.createElement(v.c,{className:"nav-link",to:"/contactus"},r.a.createElement("span",{className:"fa fa-address-card fa-lg"})," Contact Us"))),r.a.createElement(u.v,{className:"ml-auto",navbar:!0},r.a.createElement(u.w,null,r.a.createElement(u.c,{outline:!0,onClick:this.toggleModal},r.a.createElement("span",{className:"fa fa-sign-in fa-lg"})," Login")))))),r.a.createElement("div",{style:_},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row row-header"},r.a.createElement("div",{className:"col-12 col-sm-6"},r.a.createElement("h1",null,"Ristorante con Fusion"),r.a.createElement("p",null,"We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!"))))),r.a.createElement(u.s,{isOpen:this.state.isModalOpen,toggle:this.toggleModal},r.a.createElement(u.u,{toggle:this.toggleModal},"Login"),r.a.createElement(u.t,null,r.a.createElement(u.n,{onSubmit:this.handleLogin},r.a.createElement(u.o,null,r.a.createElement(u.q,{htmlFor:"username"},"Username"),r.a.createElement(u.p,{type:"text",id:"username",name:"username",innerRef:function(t){return e.username=t}})),r.a.createElement(u.o,null,r.a.createElement(u.q,{htmlFor:"password"},"Password"),r.a.createElement(u.p,{type:"password",id:"password",name:"password",innerRef:function(t){return e.password=t}})),r.a.createElement(u.o,{check:!0},r.a.createElement(u.q,{check:!0},r.a.createElement(u.p,{type:"checkbox",name:"remember",innerRef:function(t){return e.remember=t}}),"Remember me")),r.a.createElement(u.c,{type:"submit",value:"submit",color:"primary"},"Login")))))}}]),a}(n.Component);var W=function(e){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-4 offset-1 col-sm-2"},r.a.createElement("h5",null,"Links"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,r.a.createElement(v.b,{to:"/home"},"Home")),r.a.createElement("li",null,r.a.createElement(v.b,{to:"/aboutus"},"About Us")),r.a.createElement("li",null,r.a.createElement(v.b,{to:"/menu"},"Menu")),r.a.createElement("li",null,r.a.createElement(v.b,{to:"/contactus"},"Contact Us")))),r.a.createElement("div",{className:"col-7 col-sm-5"},r.a.createElement("h5",null,"Our Address"),r.a.createElement("address",null,"121, Clear Water Bay Road",r.a.createElement("br",null),"Clear Water Bay, Kowloon",r.a.createElement("br",null),"HONG KONG",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-phone fa-lg"}),": +852 1234 5678",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-fax fa-lg"}),": +852 8765 4321",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope fa-lg"}),": ",r.a.createElement("a",{href:"mailto:confusion@food.net"},"confusion@food.net"))),r.a.createElement("div",{className:"col-12 col-sm-4 align-self-center"},r.a.createElement("div",{className:"text-center"},r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+"},r.a.createElement("i",{className:"fa fa-google-plus"})),r.a.createElement("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id="},r.a.createElement("i",{className:"fa fa-facebook"})),r.a.createElement("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/"},r.a.createElement("i",{className:"fa fa-linkedin"})),r.a.createElement("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/"},r.a.createElement("i",{className:"fa fa-twitter"})),r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/"},r.a.createElement("i",{className:"fa fa-youtube"})),r.a.createElement("a",{className:"btn btn-social-icon",href:"mailto:"},r.a.createElement("i",{className:"fa fa-envelope-o"}))))),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-auto"},r.a.createElement("p",null,"\xa9 Copyright 2018 Ristorante Con Fusion")))))},G={height:"105px",width:"105px",minHeight:"105px",maxHeight:"105px",minWidth:"105px",maxWidth:"105px"};var U=function(e){var t=e.leaders.leaders.map((function(e){return r.a.createElement(a,{leader:e})}));function a(e){var t=e.leader;return r.a.createElement(f.Fade,{in:!0},r.a.createElement(u.r,{tag:"li",key:t.id,className:"col-12 mt-5"},r.a.createElement(u.r,{left:!0,middle:!0},r.a.createElement(u.r,{style:G,object:!0,src:E+t.image,alt:t.name})),r.a.createElement(u.r,{body:!0,className:"ml-5"},r.a.createElement(u.r,{heading:!0},t.name),r.a.createElement("p",null,t.designation),r.a.createElement("p",null,t.description))))}function n(){return e.leaders.isLoading?r.a.createElement(d,null):e.leaders.errMess?r.a.createElement("h4",null,e.leaders.errMess):r.a.createElement(u.r,{list:!0},r.a.createElement(f.Stagger,{in:!0},t))}return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(u.a,null,r.a.createElement(u.b,null,r.a.createElement(v.b,{to:"/home"},"Home")),r.a.createElement(u.b,{active:!0},"About Us")),r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",null,"About Us"),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12 col-md-6"},r.a.createElement("h2",null,"Our History"),r.a.createElement("p",null,"Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us."),r.a.createElement("p",null,"The restaurant traces its humble beginnings to ",r.a.createElement("em",null,"The Frying Pan"),", a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.")),r.a.createElement("div",{className:"col-12 col-md-5"},r.a.createElement(u.d,null,r.a.createElement(u.f,{className:"bg-primary text-white"},"Facts At a Glance"),r.a.createElement(u.e,null,r.a.createElement("dl",{className:"row p-1"},r.a.createElement("dt",{className:"col-6"},"Started"),r.a.createElement("dd",{className:"col-6"},"3 Feb. 2013"),r.a.createElement("dt",{className:"col-6"},"Major Stake Holder"),r.a.createElement("dd",{className:"col-6"},"HK Fine Foods Inc."),r.a.createElement("dt",{className:"col-6"},"Last Year's Turnover"),r.a.createElement("dd",{className:"col-6"},"$1,250,375"),r.a.createElement("dt",{className:"col-6"},"Employees"),r.a.createElement("dd",{className:"col-6"},"40"))))),r.a.createElement("div",{className:"col-12"},r.a.createElement(u.d,null,r.a.createElement(u.e,{className:"bg-faded"},r.a.createElement("blockquote",{className:"blockquote"},r.a.createElement("p",{className:"mb-0"},"You better cut the pizza in four pieces because I'm not hungry enough to eat six."),r.a.createElement("footer",{className:"blockquote-footer"},"Yogi Berra,",r.a.createElement("cite",{title:"Source Title"},"The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books, 2014"))))))),r.a.createElement("div",{className:"row row-content"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h2",null,"Corporate Leadership")),r.a.createElement("div",{className:"col-12"},r.a.createElement(n,null))))},Y=a(20),z=function(){return{type:"DISHES_LOADING"}},B=function(e){return{type:"ADD_DISHES",payload:e}},K=function(e){return{type:"COMMENTS_FAILED",payload:e}},J=function(e){return{type:"ADD_COMMENTS",payload:e}},Z=function(){return{type:"PROMOS_LOADING"}},$=function(e){return{type:"PROMOS_FAILED",payload:e}},Q=function(e){return{type:"ADD_PROMOS",payload:e}},V=function(){return{type:"LEADERS_LOADING"}},X=function(e){return{type:"LEADERS_FAILED",payload:e}},ee=function(e){return{type:"ADD_LEADERS",payload:e}},te=a(45),ae=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchDishes(),this.props.fetchComments(),this.props.fetchPromos(),this.props.fetchLeaders()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(P,null),r.a.createElement(te.TransitionGroup,null,r.a.createElement(te.CSSTransition,{key:this.props.location.key,classNames:"page",timeout:300},r.a.createElement(v.f,{location:this.props.location},r.a.createElement(v.e,{path:"/home",component:function(){return r.a.createElement(b,{dish:e.props.dishes.dishes.filter((function(e){return e.featured}))[0],dishesLoading:e.props.dishes.isLoading,dishErrMess:e.props.dishes.errMess,promotion:e.props.promotions.promotions.filter((function(e){return e.featured}))[0],promoLoading:e.props.promotions.isLoading,promoErrMess:e.props.promotions.errMess,leader:e.props.leaders.leaders.filter((function(e){return e.featured}))[0],leaderLoading:e.props.leaders.isLoading,leaderErrMess:e.props.leaders.errMess})}}),r.a.createElement(v.e,{exact:!0,path:"/menu",component:function(){return r.a.createElement(w,{dishes:e.props.dishes})}}),r.a.createElement(v.e,{path:"/menu/:dishId",component:function(t){var a=t.match;return r.a.createElement(R,{dish:e.props.dishes.dishes.filter((function(e){return e.id===parseInt(a.params.dishId,10)}))[0],isLoading:e.props.dishes.isLoading,errMess:e.props.dishes.errMess,comments:e.props.comments.comments.filter((function(e){return e.dishId===parseInt(a.params.dishId,10)})),commentsErrMess:e.props.comments.errMess,postComment:e.props.postComment})}}),r.a.createElement(v.e,{exact:!0,path:"/contactus",component:function(){return r.a.createElement(C,{resetFeedbackForm:e.props.resetFeedbackForm,postFeedback:e.props.postFeedback})}}),r.a.createElement(v.e,{exact:!0,path:"/aboutus",component:function(){return r.a.createElement(U,{leaders:e.props.leaders})}}),r.a.createElement(v.d,{to:"/home"})))),r.a.createElement(W,null))}}]),a}(n.Component),ne=Object(v.g)(Object(Y.connect)((function(e){return{dishes:e.dishes,comments:e.comments,promotions:e.promotions,leaders:e.leaders}}),(function(e){return{postComment:function(t,a,n,r){return e(function(e,t,a,n){return function(r){var l={dishId:e,rating:t,author:a,comment:n};return l.date=(new Date).toISOString(),fetch(E+"comments",{method:"POST",body:JSON.stringify(l),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw e})).then((function(e){return e.json()})).then((function(e){return r(function(e){return{type:"ADD_COMMENT",payload:e}}(e))})).catch((function(e){console.log("post comments",e.message),alert("Your comment could not be posted\nError: "+e.message)}))}}(t,a,n,r))},fetchDishes:function(){e((function(e){return e(z(!0)),fetch(E+"dishes").then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(B(t))})).catch((function(t){return e(K(t.message))}))}))},resetFeedbackForm:function(){e(M.actions.reset("feedback"))},fetchComments:function(){e((function(e){return fetch(E+"comments").then((function(e){return e.json()})).then((function(t){return e(J(t))}))}))},fetchPromos:function(){e((function(e){return e(Z()),fetch(E+"promotions").then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(Q(t))})).catch((function(t){return e($(t.message))}))}))},fetchLeaders:function(){e((function(e){return e(V()),fetch(E+"leaders").then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(ee(t))})).catch((function(t){return e(X(t.message))}))}))},postFeedback:function(t){return e(function(e){return function(t){var a=Object.assign({date:(new Date).toISOString()},e);return fetch(E+"feedback",{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var t=new Error("Error "+e.status+": "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.errorMessage)})).then((function(e){return e.json()})).then((function(e){return alert("Thank you for your feedback!"+JSON.stringify(e))})).catch((function(e){console.log("Post feedback: "+e.message),alert("Feedback could not be posted:\n"+e.message)}))}}(t))}}}))(ae)),re=(a(157),a(6)),le=a(14),oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,dishes:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_DISHES":return Object(re.a)(Object(re.a)({},e),{},{isLoading:!1,errMess:null,dishes:t.payload});case"DISHES_LOADING":return Object(re.a)(Object(re.a)({},e),{},{isLoading:!0,errMess:null,dishes:[]});case"DISHES_FAILED":return Object(re.a)(Object(re.a)({},e),{},{isLoading:!1,errMess:t.payload});default:return e}},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{errMess:null,comments:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_COMMENTS":return Object(re.a)(Object(re.a)({},e),{},{errMess:null,comments:t.payload});case"COMMENTS_FAILED":return Object(re.a)(Object(re.a)({},e),{},{errMess:t.payload});case"ADD_COMMENT":var a=t.payload;return Object(re.a)(Object(re.a)({},e),{},{comments:e.comments.concat(a)});default:return e}},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,promotions:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PROMOS":return Object(re.a)(Object(re.a)({},e),{},{isLoading:!1,errMess:null,promotions:t.payload});case"PROMOS_LOADING":return Object(re.a)(Object(re.a)({},e),{},{isLoading:!0,errMess:null,promotions:[]});case"PROMOS_FAILED":return Object(re.a)(Object(re.a)({},e),{},{isLoading:!1,errMess:t.payload});default:return e}},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,leaders:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_LEADERS":return Object(re.a)(Object(re.a)({},e),{},{isLoading:!1,errMess:null,leaders:t.payload});case"LEADERS_LOADING":return Object(re.a)(Object(re.a)({},e),{},{isLoading:!0,errMess:null,leaders:[]});case"LEADERS_FAILED":return Object(re.a)(Object(re.a)({},e),{},{isLoading:!1,errMess:t.payload});default:return e}},ie=a(90),ue=a.n(ie),de=a(91),Ee=a.n(de),fe={firstname:"",lastname:"",telnum:"",email:"",agree:!1,contactType:"Tel.",message:""},he=Object(le.createStore)(Object(le.combineReducers)(Object(re.a)({dishes:oe,comments:se,promotions:ce,leaders:me},Object(M.createForms)({feedback:fe}))),Object(le.applyMiddleware)(ue.a,Ee.a)),pe=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(Y.Provider,{store:he},r.a.createElement(v.a,null,r.a.createElement("div",null,r.a.createElement(ne,null))))}}]),a}(n.Component),ge=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function be(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(pe,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/restaurant-website-using-react-and-redux",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/restaurant-website-using-react-and-redux","/service-worker.js");ge?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):be(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):be(t,e)}))}}()},89:function(e,t,a){e.exports=a.p+"static/media/logo.eb267f35.png"},92:function(e,t,a){e.exports=a(158)}},[[92,1,2]]]);
//# sourceMappingURL=main.48651738.chunk.js.map