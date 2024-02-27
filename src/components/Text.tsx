import React, {ReactElement} from 'react';
import {Text as RText, StyleSheet} from 'react-native';

interface Props {
  children: string | string[] | ReactElement;
  bold?: boolean;
  color?: string;
}

export default function Text({children, bold = false, color}: Props) {
  const styles = StyleSheet.create({
    main: {
      fontFamily: bold ? 'Montserrat-Bold' : 'Montserrat-Regular',
      fontSize: 20,
      color: color ? color : '#000',
      marginBottom: 20,
    },
  });

  return <RText style={styles.main}>{children}</RText>;
}
