import { addition } from "./myFirstFunction"

xdescribe('Test Addition', () => {
    it('Testing Addition Function', () => {
        expect(addition(20,30)).toBe(50)
    })
})