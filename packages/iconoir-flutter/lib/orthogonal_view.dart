import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class OrthogonalView extends StatelessWidget {
  const OrthogonalView({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/OrthogonalView.svg');
}
