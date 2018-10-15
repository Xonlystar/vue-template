module.exports = {
  output: "src/api", // 产出到项⽬下的 api ⽬录，不⽤⼿动创建
  template: "axios", // 基于 easy-mock-templates 提供的 axios 模板
  projects: [
    {
      id: " 5bbacf24b4a128182f8ad9e8", //
      name: "demo" // 该项⽬下的 API ⽣成之后会被放到 src/api/demo ⽬录下
    }
  ]
}