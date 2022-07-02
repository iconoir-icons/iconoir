import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class AccessibilitySign extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const AccessibilitySign({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 16L15.8889 16L17.4444 18.5H19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 8.5L12 11M12 16V11M12 11H15.8889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 6.5C10.8954 6.5 10 5.60457 10 4.5C10 3.39543 10.8954 2.5 12 2.5C13.1046 2.5 14 3.39543 14 4.5C14 5.60457 13.1046 6.5 12 6.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.8816 19.5157C13.8771 20.8374 12.2882 21.6907 10.5001 21.6907C7.46249 21.6907 5.00005 19.2283 5.00005 16.1907C5.00005 13.7921 6.53551 11.7521 8.67713 11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
