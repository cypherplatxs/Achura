/**
 * Recorta una cadena de texto, dejando los primeros 6 y los últimos 4 caracteres,
 * y colocando puntos suspensivos en el medio.
 *
 * @param cadena - La cadena de texto que se quiere recortar.
 * @returns La cadena de texto recortada.
 */
function parseHash (cadena: string): string {
  if (cadena.length <= 10) {
    return cadena
  }

  const inicio = cadena.substring(0, 6)
  const final = cadena.substring(cadena.length - 4)
  return `${inicio}...${final}`
}

export {parseHash}