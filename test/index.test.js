import { generatePluginCSS } from './utils'
import { describe, it, expect } from 'vitest'

describe('tailwindcss-animations plugins', () => {
  it('use a predefined animation', async () => {
    const css = await generatePluginCSS({
      content: '<div class="animate-zoom-in">Kaixo</div>'
    })

    expect(css).toMatch(
      '@keyframes zoom-in{0%{opacity:0;transform:scale(.5)}100%{opacity:1;transform:scale(1)}}.animate-zoom-in{animation:zoom-in 0.6s ease-out}'
    )
  })

  it('use a predefined animation delay', async () => {
    const css = await generatePluginCSS({
      content: '<div class="animate-delay-300">Kaixo</div>'
    })

    expect(css).toMatch('.animate-delay-300{animation-delay:300ms}')
  })

  it('use a custom animation delay', async () => {
    const css = await generatePluginCSS({
      content: '<div class="animate-delay-[696ms]">Kaixo</div>'
    })

    expect(css).toMatch('.animate-delay-\\[696ms\\]{animation-delay:696ms}')
  })

  it('use a predefined animation duration', async () => {
    const css = await generatePluginCSS({
      content: '<div class="animate-duration-300">Kaixo</div>'
    })

    expect(css).toMatch('.animate-duration-300{animation-duration:300ms}')
  })

  it('use a custom animation duration', async () => {
    const css = await generatePluginCSS({
      content: '<div class="animate-duration-[696ms]">Kaixo</div>'
    })

    expect(css).toMatch(
      '.animate-duration-\\[696ms\\]{animation-duration:696ms}'
    )
  })

  it('use a timing function animation', async () => {
    const css = await generatePluginCSS({
      content: '<div class="animate-linear">Kaixo</div>'
    })

    expect(css).toMatch('.animate-linear{animation-timing-function:linear}')
  })
})
