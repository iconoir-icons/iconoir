import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Fridge extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Fridge({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 14L9 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 6L9 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 10V2.6C5 2.26863 5.26863 2 5.6 2H18.4C18.7314 2 19 2.26863 19 2.6V10M5 10V21.4C5 21.7314 5.26863 22 5.6 22H18.4C18.7314 22 19 21.7314 19 21.4V10M5 10H19" stroke="currentColor" stroke-width="1.5"/>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}
