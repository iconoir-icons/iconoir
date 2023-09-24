import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Number3SquareSolid extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Number3SquareSolid({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 3.6C2.25 2.85441 2.85442 2.25 3.6 2.25H20.4C21.1456 2.25 21.75 2.85442 21.75 3.6V20.4C21.75 21.1456 21.1456 21.75 20.4 21.75H3.6C2.85441 21.75 2.25 21.1456 2.25 20.4V3.6ZM12 8.75C13.1313 8.75 13.75 9.45717 13.75 10C13.75 10.4191 13.6329 10.7217 13.4616 10.9111C13.3018 11.0877 13.0195 11.25 12.5 11.25C12.0858 11.25 11.75 11.5858 11.75 12C11.75 12.4142 12.0858 12.75 12.5 12.75C13.0195 12.75 13.3018 12.9123 13.4616 13.0889C13.6329 13.2783 13.75 13.5809 13.75 14C13.75 14.5428 13.1313 15.25 12 15.25C10.8687 15.25 10.25 14.5428 10.25 14C10.25 13.5858 9.91421 13.25 9.5 13.25C9.08579 13.25 8.75 13.5858 8.75 14C8.75 15.6663 10.3699 16.75 12 16.75C13.6301 16.75 15.25 15.6663 15.25 14C15.25 13.3145 15.0575 12.6171 14.574 12.0826C14.5484 12.0544 14.5223 12.0269 14.4955 12C14.5223 11.9732 14.5484 11.9456 14.574 11.9174C15.0575 11.3829 15.25 10.6855 15.25 10C15.25 8.33369 13.6301 7.25 12 7.25C10.3699 7.25 8.75 8.33369 8.75 10C8.75 10.4142 9.08579 10.75 9.5 10.75C9.91421 10.75 10.25 10.4142 10.25 10C10.25 9.45717 10.8687 8.75 12 8.75Z" fill="currentColor"/>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}
