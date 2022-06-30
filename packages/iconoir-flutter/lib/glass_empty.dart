import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class GlassEmpty extends StatelessWidget {
  const GlassEmpty({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/GlassEmpty.svg');
}
