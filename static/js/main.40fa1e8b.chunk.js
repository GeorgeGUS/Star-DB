(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a.p+"static/media/death-star-explosion.e7f99c73.jpg"},25:function(e,t,a){e.exports=a(49)},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),l=a.n(c),i=a(3),o=a(5),s=a(8),u=a(7),m=a(9),p=r.a.createContext(),d=p.Provider,h=p.Consumer,f=a(1),g=a.n(f),E=a(4),v=function e(){var t=this;Object(i.a)(this,e),this._people=[{id:1,name:"Bilbo Baggins [TEST DATA]",gender:"male",birthYear:"long ago",eyeColor:"dark brown"},{id:2,name:"Frodo Baggins [TEST DATA]",gender:"male",birthYear:"long ago",eyeColor:"dark brown"}],this._planets=[{id:1,name:"Earth [TEST DATA]",population:"7.530.000.000",rotationPeriod:"23 hours 56 seconds",diameter:"12.742 km"},{id:2,name:"Venus [TEST DATA]",population:"not known",rotationPeriod:"243 days",diameter:"12.104 km"}],this._starships=[{id:1,name:"USS Enterprise [TEST DATA]",model:"NCC-1701-C",manufacturer:"Northrop Grumman Shipbuilding",costInCredits:"not known",length:"approx 300 meters",crew:1e3,passengers:50,cargoCapacity:100}],this.getAllPeople=Object(E.a)(g.a.mark(function e(){return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t._people);case 1:case"end":return e.stop()}},e)})),this.getPerson=Object(E.a)(g.a.mark(function e(){return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t._people[0]);case 1:case"end":return e.stop()}},e)})),this.getAllPlanets=Object(E.a)(g.a.mark(function e(){return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t._planets);case 1:case"end":return e.stop()}},e)})),this.getPlanet=Object(E.a)(g.a.mark(function e(){return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t._planets[0]);case 1:case"end":return e.stop()}},e)})),this.getAllStarships=Object(E.a)(g.a.mark(function e(){return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t._starships);case 1:case"end":return e.stop()}},e)})),this.getStarship=Object(E.a)(g.a.mark(function e(){return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t._starships[0]);case 1:case"end":return e.stop()}},e)})),this.getPersonImage=function(){return"https://placeimg.com/400/500/people"},this.getStarshipImage=function(){return"https://placeimg.com/600/400/tech"},this.getPlanetImage=function(){return"https://placeimg.com/400/400/nature"}},b=(a(32),a(22)),w=a.n(b),j=function(){return r.a.createElement("div",{className:"error-indicator"},r.a.createElement("img",{className:"error-icon",src:w.a,alt:"error icon"}),r.a.createElement("p",{className:"error-title"},"BOOM!"),r.a.createElement("p",{className:"error-message"},"Something has gone terribly \\/\\/r0nG",r.a.createElement("span",{role:"img","aria-label":"sad"},"\ud83d\ude31")),r.a.createElement("p",null,"but we already sent droids to fix it",r.a.createElement("span",{role:"img","aria-label":"droid"},"\ud83e\udd16")))},S=(a(33),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={hasError:!1},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement(j,null):this.props.children}}]),t}(n.Component)),y=a(6),I=(a(34),function(e){var t=e.onServiceChange;return r.a.createElement("header",{className:"header d-flex align-items-center"},r.a.createElement("h1",{className:"header-title"},r.a.createElement(y.b,{to:"/",className:"header-link"},"StarDB")),r.a.createElement("ul",{className:"header-nav nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(y.b,{to:"/people/",className:"nav-link"},"People")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(y.b,{to:"/planets/",className:"nav-link"},"Planets")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(y.b,{to:"/starships/",className:"nav-link"},"Starships")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(y.b,{to:"/login",className:"nav-link"},"Login")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(y.b,{to:"/secret",className:"nav-link"},"Secret"))),r.a.createElement("button",{className:"btn btn-primary btn-sm",onClick:t},"Change Service"))}),O=(a(43),function(){return r.a.createElement("div",{className:"lds-css ng-scope"},r.a.createElement("div",{className:"lds-double-ring"},r.a.createElement("div",null),r.a.createElement("div",null)))}),k=function(){function e(){var t=this;Object(i.a)(this,e),this._apiBase="https://swapi.co/api",this._imageBase="https://starwars-visualguide.com/assets/img",this.getResource=function(){var e=Object(E.a)(g.a.mark(function e(a){var n;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t._apiBase).concat(a));case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(a,", received ").concat(n.status));case 5:return e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),this.getAllPeople=Object(E.a)(g.a.mark(function e(){var a;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/people/");case 2:return a=e.sent,e.abrupt("return",a.results.map(t._transformPerson));case 4:case"end":return e.stop()}},e)})),this.getPerson=function(){var e=Object(E.a)(g.a.mark(function e(a){var n;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/people/".concat(a,"/"));case 2:return n=e.sent,e.abrupt("return",t._transformPerson(n));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),this.getAllPlanets=Object(E.a)(g.a.mark(function e(){var a;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/planets/");case 2:return a=e.sent,e.abrupt("return",a.results.map(t._transformPlanet));case 4:case"end":return e.stop()}},e)})),this.getPlanet=function(){var e=Object(E.a)(g.a.mark(function e(a){var n;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/planets/".concat(a,"/"));case 2:return n=e.sent,e.abrupt("return",t._transformPlanet(n));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),this.getAllStarships=Object(E.a)(g.a.mark(function e(){var a;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/starships/");case 2:return a=e.sent,e.abrupt("return",a.results.map(t._transformStarship));case 4:case"end":return e.stop()}},e)})),this.getStarship=function(){var e=Object(E.a)(g.a.mark(function e(a){var n;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/starships/".concat(a,"/"));case 2:return n=e.sent,e.abrupt("return",t._transformStarship(n,a));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),this.getPersonImage=function(e){var a=e.id;return"".concat(t._imageBase,"/characters/").concat(a,".jpg")},this.getPlanetImage=function(e){var a=e.id;return"".concat(t._imageBase,"/planets/").concat(a,".jpg")},this.getStarshipImage=function(e){var a=e.id;return"".concat(t._imageBase,"/starships/").concat(a,".jpg")},this._transformPlanet=function(e){return{id:t._extractId(e),name:e.name,population:e.population,rotationPeriod:e.rotation_period,diameter:e.diameter}},this._transformStarship=function(e){return{id:t._extractId(e),name:e.name,model:e.model,manufacturer:e.manufacturer,costInCredits:e.cost_in_credits,length:e.length,crew:e.crew,passengers:e.passengers,cargoCapacity:e.cargo_capacity}},this._transformPerson=function(e){return{id:t._extractId(e),name:e.name,gender:e.gender,birthYear:e.birth_year,eyeColor:e.eye_color}}}return Object(o.a)(e,[{key:"_extractId",value:function(e){return e.url.match(/\/([0-9]*)\/$/)[1]}}]),e}(),N=(a(44),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).swapiService=new k,a.state={planet:{},loading:!0,error:!1},a.onPlanetLoaded=function(e){a.setState({planet:e,loading:!1})},a.onError=function(e){a.setState({error:!0,loading:!1})},a.updatePlanet=function(){var e=Math.floor(18*Math.random())+2;a.swapiService.getPlanet(e).then(a.onPlanetLoaded).catch(a.onError)},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.updateInterval;this.updatePlanet(),this.interval=setInterval(this.updatePlanet,e)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this.state,t=e.planet,a=e.loading,n=e.error,c=!(a||n),l=a?r.a.createElement(O,null):null,i=n?r.a.createElement(j,null):null,o=c?r.a.createElement(P,t):null;return r.a.createElement("div",{className:"random-planet jumbotron rounded d-flex"},l,i,o)}}]),t}(n.Component));N.defaultProps={updateInterval:1e4};var P=function(e){var t=e.id,a=e.name,n=e.population,c=e.rotationPeriod,l=e.diameter;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3"},r.a.createElement("img",{className:"image",alt:a,width:"400",height:"400",src:"https://starwars-visualguide.com/assets/img/planets/".concat(t,".jpg")})),r.a.createElement("div",{className:"col mt-md-0 mt-3"},r.a.createElement("h2",{className:"subtitle"},a),r.a.createElement("table",{className:"table"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Population"),r.a.createElement("td",null,n)),r.a.createElement("tr",null,r.a.createElement("td",null,"Rotation Period"),r.a.createElement("td",null,c)),r.a.createElement("tr",null,r.a.createElement("td",null,"Diameter"),r.a.createElement("td",null,l))))))},x=N,_=a(13),C=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}},D=function(e){return function(t){return function(a){return r.a.createElement(t,a,e)}}},A=function(e){return function(t){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={data:null,loading:!0,error:!1},t}return Object(m.a)(a,t),Object(o.a)(a,[{key:"componentDidUpdate",value:function(e){e.getData!==this.props.getData&&this.update()}},{key:"update",value:function(){var e=this;this.setState({error:!1,loading:!0}),this.props.getData().then(function(t){e.setState({data:t,loading:!1})}).catch(function(){e.setState({error:!0,loading:!1})})}},{key:"componentDidMount",value:function(){this.update()}},{key:"render",value:function(){var t=this.state,a=t.data,n=t.loading,c=t.error;return n?r.a.createElement(O,null):c?r.a.createElement(j,null):r.a.createElement(e,Object.assign({},this.props,{data:a}))}}]),a}(n.Component)},L=function(e){return function(t){return function(a){return r.a.createElement(h,null,function(n){var c=e(n);return r.a.createElement(t,Object.assign({},a,c))})}}},T=(a(45),function(e){var t=e.data,a=e.onItemSelected,n=e.children,c=t.map(function(e){var t=e.id,c=n(e);return r.a.createElement("li",{key:t,className:"list-group-item list-group-item-action",onClick:function(){return a(t)}},c)});return r.a.createElement("ul",{className:"item-list list-group"},c)});T.defaultProps={onItemSelected:function(){}};var B=T,R=function(e){var t=e.name;return r.a.createElement("span",null,t)},U=C(L(function(e){return{getData:e.getAllPeople}}),A,D(R))(B),M=C(L(function(e){return{getData:e.getAllPlanets}}),A,D(R))(B),Y=C(L(function(e){return{getData:e.getAllStarships}}),A,D(function(e){var t=e.model,a=e.name;return r.a.createElement("span",null,a," (",t,")")}))(B),G=(a(46),function(e){var t=e.item,a=e.field,n=e.label;return r.a.createElement("tr",null,r.a.createElement("td",null,n),r.a.createElement("td",null,t[a]))}),F=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={item:null,image:null,loading:!1},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.updateItem()}},{key:"componentDidUpdate",value:function(e){e.itemId===this.props.itemId&&e.getData===this.props.getData&&e.getImageUrl===this.props.getImageUrl||this.updateItem()}},{key:"updateItem",value:function(){var e=this,t=this.props,a=t.itemId,n=t.getData,r=t.getImageUrl;a&&(this.setState({loading:!0}),n(a).then(function(t){e.setState({item:t,image:r(t),loading:!1})}).catch(this.onError))}},{key:"render",value:function(){var e=this.state,t=e.item,a=e.image,n=e.loading,c=this.props.children;if(!t)return r.a.createElement("div",{className:"details card"},r.a.createElement("span",null,"Select an item from a list"));var l=r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{className:"details-image",alt:t.name,src:a}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h3",{className:"subtitle"},t.name),r.a.createElement("table",{className:"table"},r.a.createElement("tbody",null,r.a.Children.map(c,function(e){return r.a.cloneElement(e,{item:t})}))))),i=n?r.a.createElement(O,null):l;return r.a.createElement("div",{className:"details card"},r.a.createElement(S,null,i))}}]),t}(n.Component),J=L(function(e){return{getData:e.getPerson,getImageUrl:e.getPersonImage}})(function(e){return r.a.createElement(F,e,r.a.createElement(G,{field:"gender",label:"Gender"}),r.a.createElement(G,{field:"birthYear",label:"Birth Year"}),r.a.createElement(G,{field:"eyeColor",label:"Eye Color"}))}),W=L(function(e){return{getData:e.getPlanet,getImageUrl:e.getPlanetImage}})(function(e){return r.a.createElement(F,e,r.a.createElement(G,{field:"population",label:"Population"}),r.a.createElement(G,{field:"rotationPeriod",label:"Rotation Period"}),r.a.createElement(G,{field:"diameter",label:"Diameter"}))}),q=L(function(e){return{getData:e.getStarship,getImageUrl:e.getStarshipImage}})(function(e){return r.a.createElement(F,e,r.a.createElement(G,{field:"model",label:"Model"}),r.a.createElement(G,{field:"length",label:"Length"}),r.a.createElement(G,{field:"costInCredits",label:"Cost"}))}),V=(a(47),function(e){var t=e.left,a=e.right;return r.a.createElement("div",{className:"row mb2"},r.a.createElement("div",{className:"col-md-6"},t),r.a.createElement("div",{className:"col-md-6"},a))}),$=Object(_.f)(function(e){var t=e.history,a=e.match.params.id;return r.a.createElement(V,{left:r.a.createElement(U,{onItemSelected:function(e){return t.push(e)}}),right:r.a.createElement(J,{itemId:a})})}),z=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={selectedItem:null},a.onItemSelected=function(e){a.setState({selectedItem:e})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(V,{left:r.a.createElement(M,{onItemSelected:this.onItemSelected}),right:r.a.createElement(W,{itemId:this.state.selectedItem})})}}]),t}(n.Component),H=Object(_.f)(function(e){var t=e.history;return r.a.createElement(Y,{onItemSelected:function(e){return t.push(e)}})}),K=function(e){var t=e.isLoggedIn,a=e.onLogin;return t?r.a.createElement(_.a,{to:"/"}):r.a.createElement("div",{className:"jumbotron"},r.a.createElement("p",null,"Login to see secret page"),r.a.createElement("button",{className:"btn btn-primary",onClick:a},"Login"))},Q=function(e){return e.isLoggedIn?r.a.createElement("div",{className:"jumbotron text-center"},r.a.createElement("h3",null,"This page is full of secrets!")):r.a.createElement(_.a,{to:"/login"})},X=(a(48),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={swapiService:new k,isLoggedIn:!1},a.onLogin=function(){a.setState({isLoggedIn:!0})},a.onServiceChange=function(){a.setState(function(e){var t=e.swapiService instanceof k?v:k;return console.log("switched to",t.name),{swapiService:new t}})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.state.isLoggedIn;return r.a.createElement("div",{className:"container"},r.a.createElement(S,null,r.a.createElement(d,{value:this.state.swapiService},r.a.createElement(y.a,{basename:"/star-db"},r.a.createElement(I,{onServiceChange:this.onServiceChange}),r.a.createElement(x,null),r.a.createElement(_.d,null,r.a.createElement(_.b,{path:"/",render:function(){return r.a.createElement("h2",null,"Welcome to StarDB")},exact:!0}),r.a.createElement(_.b,{path:"/people/:id?",component:$}),r.a.createElement(_.b,{path:"/planets",component:z}),r.a.createElement(_.b,{path:"/starships",exact:!0,component:H}),r.a.createElement(_.b,{path:"/starships/:id",render:function(e){var t=e.match.params.id;return r.a.createElement(q,{itemId:t})}}),r.a.createElement(_.b,{path:"/login",render:function(){return r.a.createElement(K,{isLoggedIn:t,onLogin:e.onLogin})}}),r.a.createElement(_.b,{path:"/secret",render:function(){return r.a.createElement(Q,{isLoggedIn:t})}}),r.a.createElement(_.b,{render:function(){return r.a.createElement("h2",null,"Page not found")}}))))))}}]),t}(n.Component));l.a.render(r.a.createElement(X,null),document.querySelector("#root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.40fa1e8b.chunk.js.map