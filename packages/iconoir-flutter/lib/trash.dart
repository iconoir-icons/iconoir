import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Trash extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Trash({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 11V20.4C19 20.7314 18.7314 21 18.4 21H5.6C5.26863 21 5 20.7314 5 20.4V11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 17V11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 17V11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 7L16 7M3 7L8 7M8 7V3.6C8 3.26863 8.26863 3 8.6 3L15.4 3C15.7314 3 16 3.26863 16 3.6V7M8 7L16 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
