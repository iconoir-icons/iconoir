import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Crop extends StatelessWidget {
  const Crop({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Crop.svg');
}
