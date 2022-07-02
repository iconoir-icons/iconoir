import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Journal extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Journal({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 6L18 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 10H18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 14L18 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 18L18 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 21.4V2.6C2 2.26863 2.26863 2 2.6 2H21.4C21.7314 2 22 2.26863 22 2.6V21.4C22 21.7314 21.7314 22 21.4 22H2.6C2.26863 22 2 21.7314 2 21.4Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 18V14H8V18H6Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
