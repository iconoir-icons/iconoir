import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class PanoramaEnlarge extends StatelessWidget {
  const PanoramaEnlarge({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/PanoramaEnlarge.svg');
}
