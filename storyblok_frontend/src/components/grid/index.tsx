import React from 'react'
import { IStoryblokComponent, IBlok } from '../../types/storyblok'
import Components from '..'

const Grid: React.FC<IStoryblokComponent> = ({ blok }) => {
  const { columns } = blok

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {columns.map((gridBlok: IBlok) =>
        React.createElement(Components(gridBlok.component), {
          key: gridBlok.uid,
          blok: gridBlok,
        })
      )}
    </div>
  )
}

export default Grid
