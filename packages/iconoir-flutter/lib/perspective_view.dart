import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class PerspectiveView extends StatelessWidget {
  const PerspectiveView({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/PerspectiveView.svg');
}
