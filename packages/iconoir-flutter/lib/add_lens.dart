import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class AddLens extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const AddLens({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.99219 6H5.99219M8.99219 6H5.99219M5.99219 6V3M5.99219 6V9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.11169 13.5C2.83542 18.3113 6.98691 22 11.9999 22C17.5228 22 21.9999 17.5229 21.9999 12C21.9999 6.98697 18.3112 2.83548 13.4999 2.11176" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.1973 9C17.0976 8.82774 16.9896 8.66089 16.8739 8.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.811 13.5C17.2683 15.6084 15.6084 17.2683 13.5 17.811" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}
