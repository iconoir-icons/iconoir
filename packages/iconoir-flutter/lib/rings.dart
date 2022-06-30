import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Rings extends StatelessWidget {
  const Rings({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Rings.svg');
}
