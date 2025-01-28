const gradients: string[] = [
  'bg-gradient-to-br from-gray-700 via-rose-500 to-orange-400',
  'bg-[linear-gradient(60deg,_rgb(247,_149,_51),_rgb(243,_112,_85),_rgb(239,_78,_123),_rgb(161,_102,_171),_rgb(80,_115,_184),_rgb(16,_152,_173),_rgb(7,_179,_155),_rgb(111,_186,_130))]',
  'bg-gradient-to-bl from-indigo-500 via-purple-500 to-pink-500',
  'bg-gradient-to-r from-green-300 via-yellow-300 to-pink-300',
]

export const getRandomGradient = () => {
  const index = Math.floor(Math.random() * gradients.length)
  return gradients[index]
}

export const getGradient = (index?: number) => {
  if (index === null || index === undefined) {
    return getRandomGradient()
  }
  return gradients[index]
}
