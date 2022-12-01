import React, { useEffect } from 'react';
import { Dimensions, View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const width = Dimensions.get('window').width;

const ViewSkeleton = ({ navigation }) => {
    useEffect(() => { 
        setTimeout(() => navigation.navigate("ViewUsers"), 2000);
    }, []);
    return (
        <View style={{ flex: 1, backgroundColor: '#222' }}>
            <SkeletonPlaceholder
                backgroundColor='#333'
                highlightColor='#6AC66B33'
                animationType='pulse'
                speed={1000}>
                <SkeletonPlaceholder.Item
                    borderRadius={8}
                    height={50}
                    margin={8}
                    width={width * 0.6}
                />
            </SkeletonPlaceholder>
            <SkeletonPlaceholder
                backgroundColor='#333'
                highlightColor='#444'
                animationType='pulse'
                speed={1000}>
                <SkeletonPlaceholder.Item
                    borderRadius={8}
                    height={80}
                    margin={8}
                />
            </SkeletonPlaceholder>
            <SkeletonPlaceholder
                backgroundColor='#333'
                highlightColor='#444'
                animationType='pulse'
                speed={1000}>
                <SkeletonPlaceholder.Item
                    borderRadius={8}
                    height={80}
                    margin={8}
                />
            </SkeletonPlaceholder>
        </View>
    );
}

export default ViewSkeleton;