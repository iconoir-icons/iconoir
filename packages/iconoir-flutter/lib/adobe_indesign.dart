import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class AdobeIndesign extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const AdobeIndesign({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 7V17C21 19.2091 19.2091 21 17 21H7C4.79086 21 3 19.2091 3 17V7C3 4.79086 4.79086 3 7 3H17C19.2091 3 21 4.79086 21 7Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.5 8L8.5 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.5 12V15.4C15.5 15.7314 15.2314 16 14.9 16H13.5C12.3954 16 11.5 15.1046 11.5 14V14C11.5 12.8954 12.3954 12 13.5 12H15.5ZM15.5 12V9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}
