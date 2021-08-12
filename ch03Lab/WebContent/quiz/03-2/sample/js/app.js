// 실습 #1 - `todo-footer` 컴포넌트 전역 등록
// <p>This is another child global component</p> 를 template 으로 갖는 컴포넌트를 등록해보세요.
// 전역 컴포넌트 코드 기입
Vue.component('todo-footer', {
	template: '<p>This is another child global component</p>'
});

var app = new Vue({
	el: '#app',
	data: {
		message: 'This is a parent component'
	},

// 실습 #2 - `todo-list` 컴포넌트 지역 등록
// <p>This is another child local component</p> 를 template 으로 갖는 컴포넌트를 등록해보세요.
// 지역 컴포넌트 코드 기입
	components: {
		'todo-list': {
			template: '<p>This is another child local component</p>'
		}
	}
});

// 두번째 인스턴스
new Vue({
	el: '#app1',
		components: {
		'todo-list': {
			template: '<p>This is another child local component</p>'
		}
	}
});