import './style.css'

const images = Array.from({ length: 9 }, (_, i) => `
  <div class="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition">
    <img src="/src/assets/img${i+1}.jpg"
      class="w-full h-full object-cover hover:scale-110 hover:brightness-75 transition duration-300" />
  </div>
`).join('')

document.querySelector('#app').innerHTML = `
  <h1 class="text-3xl font-bold text-center my-10">Gallery</h1>

  <div class="grid gap-4 px-6
              grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
    ${images}
  </div>
`
