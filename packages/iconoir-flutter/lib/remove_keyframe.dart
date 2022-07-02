import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class RemoveKeyframe extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const RemoveKeyframe({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 5H18H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.8476 13.317L10.5052 18.2798C9.70833 19.1905 8.29167 19.1905 7.49485 18.2798L3.15238 13.317C2.49259 12.563 2.49259 11.437 3.15238 10.683L7.49485 5.72018C8.29167 4.80952 9.70833 4.80952 10.5052 5.72017L14.8476 10.683C15.5074 11.437 15.5074 12.563 14.8476 13.317Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
