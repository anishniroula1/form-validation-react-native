import { ColorValue, KeyboardTypeOptions } from 'react-native';

export interface Question {
  key: any;
  value: any;
  error: any;
  customMaskFormatter?: any;
  clearButtonMode?: 'never' | 'while-editing' | 'unless-editing' | 'always' | undefined;
  label?: string;
  placeholder?: string;
  placeholderTextColor?: string;
  underlineColorAndroid?: ColorValue | undefined;
  keyboardType?: KeyboardTypeOptions | undefined;
  maxlength?: number;
  minLength?: number;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  multiline?: boolean;
  autoFocus?: boolean;
  numberOfLines?: number;
  scrollEnabled?: boolean;
  editable?: boolean;
  secureTextEntry?: boolean;
  onTouchCancel?: any;
  showTopLabel?: boolean;
  data?: Array<any>;
  countryCode?: string;
  mask?: 'phone' | 'date' | undefined;
}
