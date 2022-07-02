import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class ShieldSearch extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const ShieldSearch({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.5 13L15 14.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 11C9 12.3807 10.1193 13.5 11.5 13.5C12.1916 13.5 12.8175 13.2192 13.2701 12.7654C13.7211 12.3132 14 11.6892 14 11C14 9.61929 12.8807 8.5 11.5 8.5C10.1193 8.5 9 9.61929 9 11Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 18L3.13036 4.91253C3.05646 4.39524 3.39389 3.91247 3.90398 3.79912L11.5661 2.09641C11.8519 2.03291 12.1481 2.03291 12.4339 2.09641L20.096 3.79912C20.6061 3.91247 20.9435 4.39524 20.8696 4.91252L19 18C18.9293 18.495 18.5 21.5 12 21.5C5.5 21.5 5.07071 18.495 5 18Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
