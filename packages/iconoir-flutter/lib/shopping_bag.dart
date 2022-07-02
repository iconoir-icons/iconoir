import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class ShoppingBag extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const ShoppingBag({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.2609 9.69589L20.6455 18.6959C20.8319 19.9074 19.8945 21 18.6688 21H5.33122C4.10545 21 3.16809 19.9074 3.35448 18.6959L4.73909 9.69589C4.8892 8.72022 5.7287 8 6.71584 8H17.2842C18.2713 8 19.1108 8.72022 19.2609 9.69589Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
