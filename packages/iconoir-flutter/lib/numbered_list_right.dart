import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class NumberedListRight extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const NumberedListRight({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" stroke-width="1.5" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 6L15 6" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 8L19 4" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 14L18.6 14C18.2686 14 18 13.7314 18 13.4L18 12.6C18 12.2686 18.2686 12 18.6 12L19.4 12C19.7314 12 20 11.7314 20 11.4L20 10.6C20 10.2686 19.7314 10 19.4 10L18 10" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 16L19.4 16C19.7314 16 20 16.2686 20 16.6L20 19.4C20 19.7314 19.7314 20 19.4 20L18 20" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 18L18 18" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 12L15 12" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 18L15 18" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
