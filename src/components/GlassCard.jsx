import React from 'react'

export default function GlassCard({ as: Tag = 'div', className = '', children }) {
  return <Tag className={`glass-card ${className}`}>{children}</Tag>
}
