import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class AccessibilityTech extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const AccessibilityTech({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 19V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19Z" stroke="currentColor" stroke-width="1.5"/>
<path d="M9.71942 11.7864C8.7031 12.2668 8 13.3013 8 14.5001C8 16.157 9.34315 17.5001 11 17.5001C11.9211 17.5001 12.7453 17.085 13.2956 16.4315" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 14H14.5L15.5 15.5L16.5 15.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 9.5V11M12 14L12 11M12 11H14.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 7.5C11.7239 7.5 11.5 7.27614 11.5 7C11.5 6.72386 11.7239 6.5 12 6.5C12.2761 6.5 12.5 6.72386 12.5 7C12.5 7.27614 12.2761 7.5 12 7.5Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
