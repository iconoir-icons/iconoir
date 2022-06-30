import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class MediaImageFolder extends StatelessWidget {
  const MediaImageFolder({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/MediaImageFolder.svg');
}
