import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import { useBreakPoints } from '@hooks/useBreakPoint';

import { imageGridData } from './ImageGrid.config';

export const ImageGrid = () => {
    const { isMobile } = useBreakPoints();
    return (
        <ImageList
            variant="quilted"
            cols={isMobile ? 1 : 7}
            gap={24}
            rowHeight={isMobile ? 'auto' : 85}
        >
            {imageGridData.slice(0, isMobile ? 3 : 4).map((item, index) => (
                <ImageListItem
                    key={index}
                    cols={isMobile ? 1 : item.col || 1}
                    rows={isMobile ? 1 : item.row || 1}
                >
                    <img src={item.src} alt={item.alt} />
                </ImageListItem>
            ))}
        </ImageList>
    );
};
