export const lookup: {
	mime: (path: string) => string | undefined
	extension: (mime: string) => string | undefined
}

declare module '@famac/mime-tools' {
	export const lookup: {
		mime: (path: string) => string | undefined
		extension: (mime: string) => string | undefined
	}
}
