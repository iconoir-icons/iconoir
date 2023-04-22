import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class TextMagnifyingGlass extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const TextMagnifyingGlass({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.5 19.5L21 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 17C14 18.6569 15.3431 20 17 20C17.8299 20 18.581 19.663 19.1241 19.1185C19.6654 18.5758 20 17.827 20 17C20 15.3431 18.6569 14 17 14C15.3431 14 14 15.3431 14 17Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 5L9 17M9 17H7M9 17H11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 7V5L3 5L3 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}