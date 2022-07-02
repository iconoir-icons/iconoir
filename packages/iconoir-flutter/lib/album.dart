import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Album extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Album({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 20.4V3.6C3 3.26863 3.26863 3 3.6 3H20.4C20.7314 3 21 3.26863 21 3.6V20.4C21 20.7314 20.7314 21 20.4 21H3.6C3.26863 21 3 20.7314 3 20.4Z" stroke="currentColor" stroke-width="1.5"/>
<path d="M12 15.5C12 16.3284 11.3284 17 10.5 17C9.67157 17 9 16.3284 9 15.5C9 14.6716 9.67157 14 10.5 14C11.3284 14 12 14.6716 12 15.5Z" fill="currentColor"/>
<path d="M12 15.5C12 16.3284 11.3284 17 10.5 17C9.67157 17 9 16.3284 9 15.5C9 14.6716 9.67157 14 10.5 14C11.3284 14 12 14.6716 12 15.5ZM12 15.5V7.6C12 7.26863 12.2686 7 12.6 7H15" stroke="currentColor" stroke-linecap="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
