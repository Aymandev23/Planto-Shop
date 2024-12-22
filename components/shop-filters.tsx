'use client'

import { useState } from 'react'
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

interface ShopFiltersProps {
  onFilterChange: (filters: ShopFilters) => void;
}

export interface ShopFilters {
  categories: string[];
  priceRange: [number, number];
  sizes: string[];
  careLevel: string[];
}

const initialFilters: ShopFilters = {
  categories: [],
  priceRange: [0, 1000],
  sizes: [],
  careLevel: [],
}

export function ShopFilters({ onFilterChange }: ShopFiltersProps) {
  const [filters, setFilters] = useState<ShopFilters>(initialFilters)

  const handleCategoryChange = (category: string, checked: boolean) => {
    const updatedCategories = checked
      ? [...filters.categories, category]
      : filters.categories.filter(c => c !== category)
    
    const updatedFilters = { ...filters, categories: updatedCategories }
    setFilters(updatedFilters)
    onFilterChange(updatedFilters)
  }

  const handlePriceChange = (value: number[]) => {
    const updatedFilters = { ...filters, priceRange: value as [number, number] }
    setFilters(updatedFilters)
    onFilterChange(updatedFilters)
  }

  const handleSizeChange = (size: string, checked: boolean) => {
    const updatedSizes = checked
      ? [...filters.sizes, size]
      : filters.sizes.filter(s => s !== size)
    
    const updatedFilters = { ...filters, sizes: updatedSizes }
    setFilters(updatedFilters)
    onFilterChange(updatedFilters)
  }

  const handleCareLevelChange = (level: string, checked: boolean) => {
    const updatedCareLevels = checked
      ? [...filters.careLevel, level]
      : filters.careLevel.filter(l => l !== level)
    
    const updatedFilters = { ...filters, careLevel: updatedCareLevels }
    setFilters(updatedFilters)
    onFilterChange(updatedFilters)
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-white mb-2">Categories</h3>
        <div className="space-y-2">
          {['Indoor', 'Outdoor', 'Succulents'].map((category) => (
            <div key={category} className="flex items-center">
              <Checkbox
                id={`category-${category}`}
                onCheckedChange={(checked) => handleCategoryChange(category, checked as boolean)}
              />
              <Label htmlFor={`category-${category}`} className="ml-2 text-white">
                {category}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white mb-2">Price Range</h3>
        <Slider
          min={0}
          max={1000}
          step={10}
          value={filters.priceRange}
          onValueChange={handlePriceChange}
          className="w-full"
        />
        <div className="flex justify-between text-white mt-2">
          <span>Rs. {filters.priceRange[0]}</span>
          <span>Rs. {filters.priceRange[1]}</span>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white mb-2">Size</h3>
        <div className="space-y-2">
          {['Small', 'Medium', 'Large'].map((size) => (
            <div key={size} className="flex items-center">
              <Checkbox
                id={`size-${size}`}
                onCheckedChange={(checked) => handleSizeChange(size, checked as boolean)}
              />
              <Label htmlFor={`size-${size}`} className="ml-2 text-white">
                {size}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white mb-2">Care Level</h3>
        <div className="space-y-2">
          {['Easy', 'Moderate', 'Expert'].map((level) => (
            <div key={level} className="flex items-center">
              <Checkbox
                id={`care-${level}`}
                onCheckedChange={(checked) => handleCareLevelChange(level, checked as boolean)}
              />
              <Label htmlFor={`care-${level}`} className="ml-2 text-white">
                {level}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

