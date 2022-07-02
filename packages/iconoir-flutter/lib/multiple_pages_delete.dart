import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class MultiplePagesDelete extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const MultiplePagesDelete({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.87132 21.1213L4.99264 19M7.11396 16.8787L4.99264 19M4.99264 19L2.87132 16.8787M4.99264 19L7.11396 21.1213" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 2L16.5 2L21 6.5V19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 22H16.5C17.3284 22 18 21.3284 18 20.5V8.74853C18 8.5894 17.9368 8.43679 17.8243 8.32426L14.6757 5.17574C14.5632 5.06321 14.4106 5 14.2515 5H4.5C3.67157 5 3 5.67157 3 6.5V13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 8.4V5.35355C14 5.15829 14.1583 5 14.3536 5C14.4473 5 14.5372 5.03725 14.6036 5.10355L17.8964 8.39645C17.9628 8.46275 18 8.55268 18 8.64645C18 8.84171 17.8417 9 17.6464 9H14.6C14.2686 9 14 8.73137 14 8.4Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
