import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class TriangleFlagCircle extends StatelessWidget {
  const TriangleFlagCircle({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/TriangleFlagCircle.svg');
}
