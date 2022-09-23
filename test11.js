console.log(({ toString: () => 'abc', repeat: String.prototype.repeat }).repeat(2))
