const smallButtons = document.querySelectorAll('.buttons button')
const agua = document.getElementById('agua')
const restante = document.getElementById('restante')

const totalLitros = 2
const vasoML = 250
const totalVasos = smallButtons.length

updateBig()

smallButtons.forEach((btn, index) => {
  btn.addEventListener('click', () => seleccionarVasos(index))
})

function seleccionarVasos(index) {
  if (
    smallButtons[index].classList.contains('activo') &&
    !smallButtons[index].nextElementSibling?.classList.contains('activo')
  ) {
    index--
  }

  smallButtons.forEach((btn, i) => {
    if (i <= index) {
      btn.classList.add('activo')
    } else {
      btn.classList.remove('activo')
    }
  })

  updateBig()
}

function updateBig() {
  const vasosActivos = document.querySelectorAll('.buttons button.activo').length
  const porcentaje = vasosActivos / totalVasos
  const litrosTomados = (vasosActivos * vasoML) / 1000
  const litrosRestantes = (totalLitros - litrosTomados).toFixed(2)

  if (vasosActivos === 0) {
    restante.style.height = '0%'
    restante.innerText = `${totalLitros}L restante`
  } else {
    restante.style.height = `${porcentaje * 100}%`
    restante.innerText = vasosActivos === totalVasos
      ? 'Completado'
      : `${litrosRestantes}L restante`
  }
}