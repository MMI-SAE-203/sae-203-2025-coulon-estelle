const Cyber = new Proxy({"src":"/_astro/cyber.rY8nvbSu.png","width":786,"height":926,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/estelle/université/sae-203-2025-coulon-estelle/src/assets/images/header_sci-fistival/cyber.png";
							}
							
							return target[name];
						}
					});

export { Cyber as C };
