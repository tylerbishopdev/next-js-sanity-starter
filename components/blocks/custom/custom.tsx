import SectionContainer from "@/components/ui/section-container"

// Usage: Pass a map of available components and the selected key from Sanity
// Example: <CustomBlock selectedComponent="feature-card" components={{"feature-card": FeatureCard, ...}} />

interface CustomBlockProps {
  _type: string
  _key: string
  padding?: any
  colorVariant?: any
  selectedComponent?: string
  // Map of available components to render
  components: Record<string, React.ComponentType<any>>
}

export default function CustomBlock({padding, colorVariant = "background", selectedComponent, components}: CustomBlockProps) {
  const Component = selectedComponent ? components[selectedComponent] : null
  return (
    <SectionContainer color={colorVariant} padding={padding}>
      <div className="w-full">{Component ? <Component /> : <div className="rounded border p-4 text-center text-muted-foreground">No component selected. Please choose a component in Sanity.</div>}</div>
    </SectionContainer>
  )
}

// To add new components as selectable options, add them to the 'components' map in the parent (e.g., in Blocks/index.tsx) and update the Sanity schema options.
