import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class LitecoinCircleSolid extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const LitecoinCircleSolid({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM10.5 6.25C10.9142 6.25 11.25 6.58579 11.25 7V10.957L12.6954 10.3146C13.0739 10.1464 13.5171 10.3169 13.6854 10.6954C13.8536 11.0739 13.6831 11.5171 13.3046 11.6854L11.25 12.5985V16.25H15.5C15.9142 16.25 16.25 16.5858 16.25 17C16.25 17.4142 15.9142 17.75 15.5 17.75H11.1C10.3544 17.75 9.75 17.1456 9.75 16.4V13.2652L8.8046 13.6854C8.42609 13.8536 7.98287 13.6831 7.81464 13.3046C7.64641 12.9261 7.81688 12.4829 8.1954 12.3146L9.75 11.6237V7C9.75 6.58579 10.0858 6.25 10.5 6.25Z" fill="currentColor"/>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}
