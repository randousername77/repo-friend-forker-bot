import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Region } from '@/types/game';
import { regions } from '@/data/regions';

interface RegionSelectorProps {
  selectedRegion: Region;
  onRegionChange: (region: Region) => void;
}

export function RegionSelector({ selectedRegion, onRegionChange }: RegionSelectorProps) {
  return (
    <Select 
      value={selectedRegion.code} 
      onValueChange={(code) => {
        const region = regions.find(r => r.code === code);
        if (region) onRegionChange(region);
      }}
    >
      <SelectTrigger className="w-48">
        <SelectValue>
          <div className="flex items-center gap-2">
            <span className="text-lg">{selectedRegion.flag}</span>
            <span>{selectedRegion.name}</span>
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