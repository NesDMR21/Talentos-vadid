import { useState } from 'react'

export default function Tabs({ items, defaultIndex = 0 }) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex)

  return (
    <div className="tabs">
      <div className="tabs-nav" role="tablist">
        {items.map((item, idx) => (
          <button
            key={item.label}
            role="tab"
            aria-selected={activeIndex === idx}
            className={'tab-btn' + (activeIndex === idx ? ' active' : '')}
            onClick={() => setActiveIndex(idx)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="tabs-panel" key={activeIndex}>
        {items[activeIndex].content}
      </div>
    </div>
  )
}
