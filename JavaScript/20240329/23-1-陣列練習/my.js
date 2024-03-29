const ar = []

ar[0] = 'a'
ar[1] = 'i'
ar[2] = 'u'
ar[3] = 'e'
ar[4] = 'o'

h3 = document.querySelectorAll('h3')

h3[0].innerHTML = ar
ar.push('乂')
h3[1].innerHTML = ar
ar.unshift('乂')
h3[2].innerHTML = ar
h3[3].innerHTML = ar.includes('a', 1)
ar.pop()
h3[4].innerHTML = ar
ar.shift()
h3[5].innerHTML = ar
// h3[0].innerHTML = ar

// ar.includes('a', 0)