import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Region } from '@/types/game';
import { regions } from '@/data/regions';

interface RegionSelectorProps {
  selectedRegion: string;
  onRegionChange: (regionCode: string) => void;
}

export function RegionSelector({ selectedRegion, onRegionChange }: RegionSelectorProps) {
  const currentRegion = regions.find(r => r.code === selectedRegion) || regions[0];

  return (
    <Select 
      value={selectedRegion} 
      onValueChange={onRegionChange}
    >
      <SelectTrigger className="w-48">
        <SelectValue>
          <div className="flex items-center gap-2">
            <span className="text-lg">{currentRegion.flag}</span>
            <span>{currentRegion.name}</span>
          </div>
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {regions.map((region) => (
          <SelectItem key={region.code} value={region.code}>
            <div className="flex items-center gap-2">
              <span className="text-lg">{region.flag}</span>
              <span>{region.name}</span>
              <span className="text-muted-foreground">({region.currency})</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}