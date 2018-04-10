export default [
    {
      path: '/test',
      component: resolve =>void(require(['../components/pc/Test'], resolve))
    },
]