import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Backward15Seconds extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Backward15Seconds({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" stroke-width="1.5" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 13C3 17.9706 7.02944 22 12 22C16.9706 22 21 17.9706 21 13C21 8.02944 16.9706 4 12 4" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 9L9 16" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 9L13 9C12.4477 9 12 9.44772 12 10L12 11.5C12 12.0523 12.4477 12.5 13 12.5L14 12.5C14.5523 12.5 15 12.9477 15 13.5L15 15C15 15.5523 14.5523 16 14 16L12 16" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 4L4.5 4M4.5 4L6.5 2M4.5 4L6.5 6" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}
